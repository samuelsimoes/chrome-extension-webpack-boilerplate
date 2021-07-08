// External dependencies
import abiDecoder from "abi-decoder";

// Internal dependencies
import axies from "../ABI/axies";
import marketplace from "../ABI/marketplace";
import transferCripto from "../ABI/transferCripto";

abiDecoder.addABI([...axies, ...marketplace, ...transferCripto]);

export default abiDecoder;
