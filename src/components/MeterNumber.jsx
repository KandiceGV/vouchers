import * as React from "react";
import { PlasmicMeterNumber } from "./plasmic/vouchers/PlasmicMeterNumber";

function MeterNumber_(props, ref) {
  const { plasmicProps } = PlasmicMeterNumber.useBehavior(props, ref);
  return <PlasmicMeterNumber {...plasmicProps} />;
}

const MeterNumber = React.forwardRef(MeterNumber_);

export default Object.assign(MeterNumber, {
  __plumeType: "text-input"
});
