import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StatesProps {
  locationString: string;
  price: number;
  coordinates: {
    lat?: number,
    lon?: number,
    status?: string
  };
}

const initialState: StatesProps = {
  locationString: "",
  price: 1,
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
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setCoordinates: (state, action: PayloadAction<Object>) => {
        state.coordinates = action.payload
    }
  },
});

export const {setCoordinates, setLocationString, setPrice} = placeSlice.actions
export default placeSlice.reducer
