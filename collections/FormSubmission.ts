import { CollectionConfig } from 'payload/types'

export const FormSubmission: CollectionConfig = {
  slug: 'form-submission',
  fields: [
    {
      name: 'from',
      label: 'From',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'source',
      label: 'Source',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}

export default FormSubmission
