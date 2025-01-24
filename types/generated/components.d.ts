import type { Schema, Struct } from '@strapi/strapi';

export interface IconsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_icons_social_links';
  info: {
    description: '';
    displayName: 'SocialLink';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Menu: Schema.Attribute.Component<'shared-components.link', true>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_components_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    Menu: Schema.Attribute.Component<'shared-components.link', true>;
    SocialLinks: Schema.Attribute.Component<'icons.social-link', true>;
    TopLinks: Schema.Attribute.Component<'shared-components.link', true>;
  };
}

export interface SharedComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_components_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_components_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'icons.social-link': IconsSocialLink;
      'sections.header': SectionsHeader;
      'shared-components.footer': SharedComponentsFooter;
      'shared-components.link': SharedComponentsLink;
      'shared-components.seo': SharedComponentsSeo;
    }
  }
}
