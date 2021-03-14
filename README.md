# Node-Wialon

### A NodeJS wrapper implementation for Wialon Remote API written in TypeScript. [(See docs.)](https://sdk.wialon.com/wiki/en/kit/remoteapi/apiref)

## Installation

`npm install node-wialon`

## Usage

Most remote api SVCs should be mapped into function.

For example:

```typescript
import { Wialon, UnitsDataFormat } from "node-wialon";

type WialonUnitSearchResponse = UnitsDataFormat.GeneralProperties &
	UnitsDataFormat.AvailableCommands &
	UnitsDataFormat.LastMessagePosition &
	UnitsDataFormat.AdvancedProperties &
	UnitsDataFormat.Counters;

const wialon = await Wialon.tokenLogin({ token: WIALON_TOKEN });

/** svc=core/search_item */
const itemSearch = await wialon.Core.searchItem<WialonUnitSearchResponse>({
	id: SOME_UNIT_ID,
	flags: 1 + 256 + 512 + 1024 + 8192
});

/** svc=report/cleanup_result */
await wialon.Report.cleanupResult();

/** If svc is not yet implemented in this library, you can use the wialon helper
 *  which automatically builds a request with a session ID.
 */
await wialon.execute<Response, Params>("unit/exec_cmd", { ...params });
```
