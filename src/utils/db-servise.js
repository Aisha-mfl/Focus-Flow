import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
import {Place} from '../NativeProject/models/place';

const tableName = 'places';

enablePromise(true);

let dbInstance = null; // Store the database instance

export const getDBConnection = async () => {
  if (!dbInstance) {
    dbInstance = await openDatabase(
      {
        name: 'places.db',
        createFromLocation: 1,
      },
      res => {
        console.log('res', res);
      },
      error => {
        console.log('error', error);
      },
    );
  }
  return dbInstance;
};

export const initDatabase = async () => {
  try {
    const db = await getDBConnection();
    await createPlacesTable(db);
    console.log(db);
  } catch (error) {
    console.error('Failed to initialize database:', error);
    throw error;
  }
};

const createPlacesTable = async db => {
  const query = `
  CREATE TABLE IF NOT EXISTS ${tableName}(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    imageUri TEXT NOT NULL,
    address TEXT NOT NULL,
    lat REAL NOT NULL,
    lng REAL NOT NULL
  );
`;

  await db.executeSql(query);
};

export const getPlaces = async () => {
  const db = await getDBConnection();
  try {
    let places = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        places.push(
          new Place(
            result.rows.item(index).title,
            result.rows.item(index).imageUri,
            {
              address: result.rows.item(index).address,
              lat: result.rows.item(index).lat,
              lng: result.rows.item(index).lng,
            },
            result.rows.item(index).id,
          ),
        );
      }
    });

    return places;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get Places !!!');
  }
};

export const fetchDetail = async id => {
  const db = await getDBConnection();

  try {
    const fetch = await db.executeSql(
      `SELECT * FROM ${tableName}
      WHERE id = ?`,
      [id],
    );
    const item = fetch[0].rows.item(0);
    console.log('ITEM: ', item);
    const place = new Place(
      item.title,
      item.imageUri,
      {
        address: item.address,
        lat: item.lat,
        lng: item.lng,
      },
      item.id,
    );
    console.log('fetch', place);

    return place;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to Fetch Details !!!');
  }
};

export const insertPlace = async place => {
  // Basic validation
  if (!place?.location?.lat || !place?.location?.lng) {
    throw new Error('Missing location coordinates');
  }

  const db = await getDBConnection();

  console.log('brfore', place);

  try {
    const result = await db.executeSql(
      `INSERT INTO ${tableName} (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
      [
        place.title,
        place.imageUri,
        place.address,
        place.location.lat,
        place.location.lng,
      ],
    );
    return result;
  } catch (error) {
    console.error('Failed to save place:', error);
    throw error;
  }
};

export const deletePlace = async id => {
  try {
    const db = await getDBConnection();
    await db.executeSql(`DELETE FROM ${tableName} WHERE id = ?`, [id]);
  } catch (error) {
    console.error('Failed to delete place:', error);
    throw error;
  }
};
