import { AuthorDocument } from './author-document';
import { Section } from '../section/section';
import { DocumentTypeEnum } from '../../enums/document-type-enum';

export interface LibraryDocument {
  id: number;
  title: string;
  documentType: DocumentTypeEnum;
  yearOfPublication: string;
  publisher: string;
  language: string;
  imageFileName: string;
  documentFileName: string;
  pages: number;
  isFresh: boolean;
  section?: Section;
  authorDocuments: AuthorDocument[];
}
