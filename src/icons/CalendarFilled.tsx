// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import CalendarFilledSvg from '../../vendors/asn/CalendarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarFilledSvg} />;

CalendarFilled.displayName = 'CalendarFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarFilled);