export interface IHeroData {
  image: any;
  id: string;
  name: string;
  universe: number;
  details: {
    fullName: string;
    birthDay: string;
    homeland: string;
    height: number;
    weight: number;
  };
}