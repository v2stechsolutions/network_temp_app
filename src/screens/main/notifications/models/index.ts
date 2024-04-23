export type NotificationType =
  | 'Event'
  | 'One to One Meeting'
  | 'Chapter Meeting'
  | 'Reference'
  | 'Done Deal';

export type Notification = {
  title: string;
  body: {
    message: string;
    type: NotificationType;
  };
};