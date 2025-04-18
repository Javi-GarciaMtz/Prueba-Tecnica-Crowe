export interface GetAllCharactersResponse {
  count:    number;
  next:     string;
  previous: any;
  results:  Character[];
}

export interface Character {
  name:       string;
  height:     string;
  mass:       string;
  hair_color: string;
  skin_color: string;
  eye_color:  string;
  birth_year: string;
  gender:     Gender;
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}
