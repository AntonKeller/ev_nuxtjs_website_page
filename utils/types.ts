export interface link {
  title: string,
  description: string,
  url: string,
  transition?: string
}

export interface ratingButton {
  id: Number,
  title: String,
  year: Number,
}

interface ratingKey {
  title: String,
  value: String,
}

export interface ratingDescription {
  id: Number,
  year: Number,
  keys: Array<ratingKey>
}
