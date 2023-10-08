import { ChangeEvent } from 'react';

interface SelectorProps {
	setter?: (e: ChangeEvent) => void;
	isFilter?: boolean;
}

export default SelectorProps;