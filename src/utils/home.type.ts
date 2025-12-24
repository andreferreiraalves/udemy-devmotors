export interface HomeProps {
  object: {
    slug?: string;
    title?: string;
    metadata?: {
      banner?: {
        url?: string;
        imgix_url?: string;
      };
      heading?: string;
      cat_button?: {
        title?: string;
        url?: string;
      };
      about?: {
        description?: string;
        banner?: string;
      };
      services?: HomeServiceProps[];
      contact?: {
        email?: string;
        phone?: string;
        address?: string;
        time?: string;
      };
    };
  };
}

export interface HomeServiceProps {
  image: {
    url?: string;
  };
  description?: string;
}
