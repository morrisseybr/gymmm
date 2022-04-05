import { WeightMesure } from "../models/WeightMesure";
import { WeightMesureRepository } from "../models/WeightMesureRepository";

interface WeightService {
  saveNewMeasurement(weight: number): Promise<void>;
  getLastMeasurement(): Promise<WeightMesure | null>;
}

export default (
  weightMesureRepository: WeightMesureRepository
): WeightService => {
  const saveNewMeasurement = async (weight: number): Promise<void> => {
    const weightMesure: WeightMesure = {
      date: new Date(),
      weight: weight,
    };
    await weightMesureRepository.save(weightMesure);
  };
  const getLastMeasurement = async (): Promise<WeightMesure | null> => {
    return weightMesureRepository.getLast();
  };
  return {
    saveNewMeasurement,
    getLastMeasurement,
  };
};