import React, { ReactNode } from "react";

interface IMaybeProps {
	condition: boolean;
	children: ReactNode;
}

export const Maybe = (props: IMaybeProps) => {
	const { condition, children } = props;
	return <>{condition && children}</>;
};
