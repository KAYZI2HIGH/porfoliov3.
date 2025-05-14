import {defineType, defineField, defineArrayMember} from 'sanity'

export const postType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.min(100).max(250).required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'service',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'about',
      type: 'string',
      validation: (rule) => rule.min(300).max(550).required(),
    }),
    defineField({
      name: 'keyFeatures',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.min(5).required(),
    }),
    defineField({
      name: 'projectDetails',
      type: 'document',
      fields: [
        defineField({
          name: 'duration',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'teamSize',
          type: 'number',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'outcomes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string',
            }),
          ],
          validation: (rule) => rule.min(3).required(),
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'document',
          fields: [
            defineField({
              name: 'icon',
              type: 'string',
            }),
            defineField({
              name: 'name',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFavourite',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
  ],
})
