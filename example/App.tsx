import { useEvent } from 'expo';
import ExpoAlipay from 'expo-alipay-kit';
import { Alert, Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  const onPayResultPayload = useEvent(ExpoAlipay, 'onPayResult');
  ExpoAlipay.registerApp("9021000156665837")
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Async functions">
          <Button
            title="设置沙箱模式 (仅Android)"
            onPress={async () => {
              try {
                await ExpoAlipay.setSandboxMode('sandbox');
                Alert.alert('成功', '已切换到沙箱环境');
              } catch (error) {
                Alert.alert('错误', String(error));
              }
            }}
          />
          <Button
            title="设置线上模式 (仅Android)"
            onPress={async () => {
              try {
                await ExpoAlipay.setSandboxMode('online');
                Alert.alert('成功', '已切换到线上环境');
              } catch (error) {
                Alert.alert('错误', String(error));
              }
            }}
          />
          <Button
            title="支付"
            onPress={async () => {
              const result = await ExpoAlipay.pay({
                orderInfo: 'alipay_sdk=alipay-sdk-java-4.38.61.ALL&app_id=9021000156665837&biz_content=%7B%22body%22%3A%2210+RTT%22%2C%22out_trade_no%22%3A%22P1978940333266419714%22%2C%22subject%22%3A%2210%E5%85%83%E8%99%9A%E6%8B%9F%E5%B8%81RTT%22%2C%22time_expire%22%3A%222025-10-17+07%3A45%3A17%22%2C%22total_amount%22%3A%2210.00%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fsh-2.frp.one%3A54240%2Fapi%2Fpay%2Fnotify%2Falipay&sign=b%2BwbErfQph12CqIeRqH08ZqF%2B2giKbVtqyOVUum2%2BDjyT5OiQRsvUizbDnCCcRGF0uyjppo44LXPmDBVFgnPkEJpNe37AgFPp2%2FMYhJKrq%2FwNnvR%2Fo0qsZUamooycBwcuQhPj9zO34YuWNCEXC7JMnBtYxkuorwXQkUp2N%2BVU92N5KwbTBzeW9Pf8VvQDd44cf3LWHTH8ygZY1ifHjgHMB3SUOuiLICZPU2KlsNThei%2FU3ZR7M9MHwS6OIdhfhlsdIc%2FqY3cbGun%2FzDND0VWFEYfTxh1unkaBz0U8E3Lg%2BW873LXx1DU7zYzDgimiAj2WiLM6De07KagSnvcRAezkA%3D%3D&sign_type=RSA2&timestamp=2025-10-17+05%3A45%3A17&version=1.0',
                scheme: "tech.wenchuan.lqpay",
                universalLink: undefined
              });
              console.log(result);
            }}
          />
        </Group>
        <Group name="Events">
          <Text>{JSON.stringify(onPayResultPayload)}</Text>
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
