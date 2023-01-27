import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StatesProps {
  locationString: string;
  price: string;
  coordinates: {};
}

const initialState: StatesProps = {
  locationString: "",
  price: "",
  coordinates: {
    lat: 0,
    lon: 0,
    status: ""
  },
};

export const placeSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setLocationString: (state, action: PayloadAction<string>) => {
      state.locationString = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setCoordinates: (state, action: PayloadAction<Object>) => {
        state.coordinates = action.payload
    }
  },
});

export const {setCoordinates, setLocationString, setPrice} = placeSlice.actions
export default placeSlice.reducer
