const Base = {
  M: (D: number, E: number, F: number): number => D + (D * E / 10),
  P: (D: number, E: number, F: number): number =>  D + (D * (E - F) / 25.5),
  T: (D: number, F: number): number => D - (D * F / 30),
};

const Custom1 = Object.create(Base);
const Custom2 = Object.create(Base);

Custom1.P = (D: number, E: number): number => 2 * D + (D * E / 100);
Custom2.M = (D: number, E: number, F: number): number => F + D + (D * E / 100);

export default {
  Base,
  Custom1,
  Custom2,
}
