import { registerWebModule, NativeModule } from 'expo';

import type { ExpoAlipayModuleEvents } from './ExpoAlipay.types';

class ExpoAlipayModule extends NativeModule<ExpoAlipayModuleEvents> {
  
}

export default registerWebModule(ExpoAlipayModule, 'ExpoAlipayModule');
