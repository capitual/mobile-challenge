import { Hero } from '../graphql';

export interface ProfileHeroRenderItem {
  item: Hero;
  index: number;
}

export interface ProfileHeroParams {
  hero: Hero;
}
