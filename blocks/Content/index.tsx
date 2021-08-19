import React from 'react';
import { Block } from 'payload/types';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export type Type = {
  blockType: 'content';
  blockName?: string;
  content: unknown;
};

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'width',
          label: 'Width',
          type: 'select',
          defaultValue: 'full',
          options: [
            {
              label: 'One Third',
              value: 'oneThird',
            },
            {
              label: 'Half',
              value: 'half',
            },
            {
              label: 'Tow Third',
              value: 'towThird',
            },
            {
              label: 'Full',
              value: 'full',
            },
          ],
        },
      ],
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText content={content} className={classes.content} />
    </div>
  );
};

export default Content;
