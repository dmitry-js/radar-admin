import { FormField } from '@/components/radars/form/types'

export const MAX_RINGS = 4
export const MAX_QUADRANTS = 4

export const formatFieldsToObjects = (fields: string[]) =>
  fields.map((field) => ({ value: field }))
export const formatFieldsToArray = (fields: FormField[]) =>
  fields.map(({ value }) => value)
