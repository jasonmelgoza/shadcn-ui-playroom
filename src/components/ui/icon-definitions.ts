import {
  Archive,
  ArchiveX,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Banknote,
  Book,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Check,
  Chrome,
  Clock,
  Copy,
  Clipboard,
  Ellipsis,
  EllipsisVertical,
  File,
  FileCheck,
  Folder,
  FolderCheck,
  Github,
  Mail,
  RefreshCcw,
  Reply,
  ReplyAll,
  Trash,
  Trash2,
  User,
  X
} from 'lucide-react';

export type IconName =
  | 'archive'
  | 'archiveX'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'banknote'
  | 'book'
  | 'bookmark'
  | 'bookmarkCheck'
  | 'bookOpen'
  | 'check'
  | 'chrome'
  | 'clipboard'
  | 'clock'
  | 'copy'
  | 'ellipsis'
  | 'ellipsisVertical'
  | 'file'
  | 'fileCheck'
  | 'folder'
  | 'folderCheck'
  | 'github'
  | 'mail'
  | 'refreshCcw'
  | 'reply'
  | 'replyAll'
  | 'trash'
  | 'trash2'
  | 'user'
  | 'x';

export const iconMap = {
  archive: Archive,
  archiveX: ArchiveX,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  banknote: Banknote,
  book: Book,
  bookmark: Bookmark,
  bookmarkCheck: BookmarkCheck,
  bookOpen: BookOpen,
  check: Check,
  chrome: Chrome,
  clipboard: Clipboard,
  clock: Clock,
  copy: Copy,
  ellipsis: Ellipsis,
  ellipsisVertical: EllipsisVertical,
  file: File,
  fileCheck: FileCheck,
  folder: Folder,
  folderCheck: FolderCheck,
  github: Github,
  mail: Mail,
  refreshCcw: RefreshCcw,
  reply: Reply,
  replyAll: ReplyAll,
  trash: Trash,
  trash2: Trash2,
  user: User,
  x: X
} as const;
