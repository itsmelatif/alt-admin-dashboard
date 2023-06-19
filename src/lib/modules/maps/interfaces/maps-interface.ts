export interface IMaps {
  html_attributions: any[];
  results: IResultMaps[];
  status: string;
}

export interface IResultMaps{
  business_status: string;
  geometry: {
      location: {
          lat: number;
          lng: number;
      },
      viewport: {
          northeast: {
              lat: number;
              lng: number;
          },
          southwest: {
              lat: number;
              lng: number;
          }
      }
  },
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: {
      open_now: boolean
  },
  photos: [
      {
          height: number;
          html_attributions: string[];
          photo_reference:string;
          width: number;
      }
  ],
  place_id: string;
  plus_code: {
      compound_code: string;
      global_code: string;
  },
  rating: number;
  reference: string;
  scope: string;
  types: string[]
  user_ratings_total: number;
  vicinity: string;
}

export interface IMapsSearch{
 lat: number;
 lng: number;
 keyword: string;
 radius: number;
 type: string;
}
