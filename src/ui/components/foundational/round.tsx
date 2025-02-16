// From Ethereal, licensed under the GNU General Public License v3.0

import Fusion, { UsedAs } from "@rbxts/fusion";
import { Scoped } from "ui/scoped";

export interface RoundProps extends Scoped {
	radius?: UsedAs<UDim>;
}

export function Round({ scope, radius = new UDim() }: RoundProps) {
	return <uicorner scope={scope} Name="Round" CornerRadius={radius} />;
}
