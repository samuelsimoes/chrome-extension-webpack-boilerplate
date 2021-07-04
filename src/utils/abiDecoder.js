// External dependencies
import abiDecoder from "abi-decoder";

// Internal dependencies
import axies from "../ABI/axies";
import marketplace from "../ABI/marketplace";

abiDecoder.addABI([...axies, ...marketplace]);

export default abiDecoder;
