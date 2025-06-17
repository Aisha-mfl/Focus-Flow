import {createSlice} from '@reduxjs/toolkit';

const PlaceSlice = createSlice({
  name: 'Place',
  initialState: {
    title: '',
    image: '',
    location: {},
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setLocation: (state, action) => {
      (state.location.address = action.payload.address),
        (state.location.lat = action.payload.lat),
        (state.location.lng = action.payload.lng);
    },
  },
});
export const setTitle = PlaceSlice.actions.setTitle;
export const setImage = PlaceSlice.actions.setImage;
export const setLocation = PlaceSlice.actions.setLocation;
export default PlaceSlice.reducer;
