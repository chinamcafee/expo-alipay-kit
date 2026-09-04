import { NativeModule, requireNativeModule } from 'expo';

import type { AuthOptions, ExpoAlipayModuleEvents, PayOptions } from './ExpoAlipay.types';

declare class ExpoAlipayModule extends NativeModule<ExpoAlipayModuleEvents> {

  getVersion(): Promise<string>

  /**
   * 注册支付宝商户 AppId（Android 推荐在支付前调用）。
   * @param appId 支付宝应用 AppId
   */
  registerApp(appId: string): Promise<void>;

  /**
   * 设置支付宝SDK环境模式（仅Android生效）。
   * @param mode 环境模式：'sandbox' | 'online' | 'pre_sandbox'
   */
  setSandboxMode(mode: 'sandbox' | 'online' | 'pre_sandbox'): Promise<void>;

  /**
   * 支付宝支付。
   * @param options 支付参数。
   * @returns 支付调用结果。
   */
  pay(options: PayOptions): Promise<any>;
  /**
   * 支付宝授权登录。
   * @param options 授权参数。
   * @returns 授权调用结果。
   */
  auth(options: AuthOptions): Promise<any>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAlipayModule>('ExpoAlipay');
