export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Avaleht: undefined;
  Otsi: undefined;
  Kogu: undefined;
  Premium: undefined;
  TabOne: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  SearchScreen: undefined;
};

export type TabThreeParamList = {
  CollectionScreen: undefined;
};

export type TabFourParamList = {
  PremiumScreen: undefined;
};

export type Album = {
  id: string;
  imageUri: string;
  artistsHeadLine: string;
  by: string;
  likes: string;
  name: string;
}

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
}