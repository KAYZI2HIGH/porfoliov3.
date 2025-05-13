import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profession',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introduction',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'professionalSummary',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tools',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'imageUrl',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'experience',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            defineField({
              name: 'companyLogo',
              type: 'image',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'role',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'companyName',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'duration',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'education',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            defineField({
              name: 'schoolLogo',
              type: 'image',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'program',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'schoolName',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'duration',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
