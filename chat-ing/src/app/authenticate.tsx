import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/theme/ThemeProvider";
import { useState } from "react";
import Input from "@/components/commons/Input";
import Button from "@/components/commons/Button";
import CountryPicker, {
    Country,
    CountryCode,
} from "react-native-country-picker-modal";
import { chatIcon } from "@/data/images";
import { getExampleNumber, CountryCode as PhoneCountryCode } from "libphonenumber-js";
import examples from "libphonenumber-js/mobile/examples";


export default function AuthenticateScreen() {

    const { theme } = useTheme();

    /* Common informations for the mobile number including the country code,
    the calling code, and also the phone number.*/
    const [countryCode, setCountryCode] = useState<CountryCode>("IN");
    const [callingCode, setCallingCode] = useState("91");
    const [ph, setPh] = useState("");

    /* OTP related informations */
    const [otp, setOtp] = useState<string>("");
    const [sentOtp, setSendOtp] = useState(false);

    const onSelect = (country: Country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
    };

    const example = getExampleNumber(countryCode as PhoneCountryCode, examples);

    const limit = example?.nationalNumber.length;

    /*The full final phone number of the user to send otp onto*/
    const fullPhoneNumber = `+${callingCode}${ph}`;
    return (
        <SafeAreaView className="flex-1"
            style={{
                backgroundColor: theme.background,
            }}>

            {/*Main container of the screen, with phone number input and country code selection
            also the otp screen*/}
            <View className="flex w-full h-full items-center flex-col gap-5 p-5 mt-20"
                style={{
                    backgroundColor: theme.background,
                }}
            >
                {/*Application icon*/}
                <View className="w-full">
                    <Image source={chatIcon} style={{ width: 100, height: 100, borderRadius: 30 }} resizeMode="contain" />
                </View>

                {sentOtp ?
                    <>
                        <Text className="text-4xl font-bold text-start w-full">
                            Enter OTP
                        </Text>

                        {/*OTP Input*/}
                        <Input value={otp}
                            onChangeText={(text) => setOtp(text)}
                            placeholder="Enter 6 digit OTP send to your device"
                            keyboardType="numeric"
                            limit={6}
                            textStyle={{
                                textAlign: "center"
                            }}
                        />

                        <Button
                            title="Verify"
                        />

                    </>
                    : <>
                        {/*Phone number input*/}
                        <Text
                            className="text-4xl font-bold w-full text-start"
                            style={{ color: theme.textPrimary }}
                        >
                            Phone Number
                        </Text>

                        <View className="flex gap-2 items-center flex-row">

                            {/*Country Code informations*/}
                            <View style={{
                                backgroundColor: theme.background,
                                borderWidth: 3,
                                borderColor: theme.border,
                                borderRadius: 5,
                                padding: 5,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 2
                            }}>
                                <Text>
                                    {callingCode && callingCode.length > 0 ? `+${callingCode}` : ""}
                                </Text>

                                <CountryPicker
                                    countryCode={countryCode}
                                    withFilter
                                    withFlag
                                    withEmoji
                                    withCallingCode
                                    onSelect={onSelect}
                                />
                            </View>

                            {/*Main phone number*/}
                            <Input
                                value={ph}
                                onChangeText={(text: string) => setPh(text)}
                                placeholder="Enter your phone number"
                                keyboardType="phone-pad"
                                componentStyle={{
                                    width: "auto",
                                    flex: 1
                                }}
                                limit={limit}
                            />
                        </View>

                        <Button title="Get OTP"
                            onPress={() => setSendOtp(true)}
                        /></>}
            </View>
        </SafeAreaView>
    );
}