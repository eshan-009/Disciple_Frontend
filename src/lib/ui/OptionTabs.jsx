import { SegmentedControl, Text } from '@radix-ui/themes'
import React from 'react'

const OptionTabs = ({label,tabOptions}) => {
  return (
    <Text as="label" size="3">
    
  {label}
  <SegmentedControl.Root defaultValue="inbox" >
  {
  
  tabOptions?.length>0 && tabOptions?.map((item,index)=>(<SegmentedControl.Item key={index} value={item?.value}>{item?.option}</SegmentedControl.Item>))
  
  }

  </SegmentedControl.Root>
  </Text>
  )
}

export default OptionTabs
