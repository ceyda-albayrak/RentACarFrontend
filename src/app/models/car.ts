  
import { CarImage } from "../models/carImage";;
export interface Car {
    carId:number,
    carName:string,
    brandId:number,
    colorId:number,
    brandName:string,
    colorName:string,
    modelYear:number,
    dailyPrice:number,
    description:string,
    carImage:CarImage[];
}