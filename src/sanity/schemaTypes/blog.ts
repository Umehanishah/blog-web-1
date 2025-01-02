import { defineField, defineType } from "sanity"


export default defineType ({
    name: "blog",
    title: "blog",
    type: "document",
    fields: [
        defineField({
        name: "title",
        title: "Title",
        type: "string",
        description: "The main title of the blog."
      }),
      defineField({
        name: "description",
        title: "Description",
        type: "text",
        description: "A brief description or subtitle for the blog."
      }),
      defineField({
        name: 'slug',
        title: 'slug',
        type: 'slug',
        options: {
          source: "title",
          maxLength: 200 
        }
      }),
      defineField({
        name: "paragraph",
        title: "Blog",
        type: "text",
        description: "A list of blogs displayed on the blog."
      }),
      defineField({
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Enables image cropping
        },
        description: "A featured image for the blog."
      }),
      defineField({
        name: "year",
        title: "Year",
        type: "string",
        description: "The year associated with the blog content."
      }),
    ],
  }
)
  