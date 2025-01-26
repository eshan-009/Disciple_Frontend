import { Text, TextField } from '@radix-ui/themes'
import React from 'react'

const InputField = ({label,placeholder,type,labelSize="3",variant="surface"}) => {
  return (
    <Text as="label" size={labelSize}>
    {label}
  <TextField.Root type={type}  size="3" variant={variant} placeholder={placeholder} />
  </Text>
  )
}

export default InputField
