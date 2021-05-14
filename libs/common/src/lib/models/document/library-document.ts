import { AuthorDocument } from './author-document';
import { Section } from '../section/section';

export interface LibraryDocument {
  id: number;
  title: string;
  documentType: string;
  year: string;
  publisher: string;
  language: string;
  imageFileName: string;
  documentFileName: string;
  pages: number;
  isFresh: boolean;
  section?: Section;
  authorDocuments: AuthorDocument[];
}
