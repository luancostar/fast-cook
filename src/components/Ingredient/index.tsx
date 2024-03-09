import { Pressable, PressableProps, Image, Text } from "react-native";
import { styles } from "./styles";

export type ingredientsProps = {
    name: string,
    image: string,
    selected: boolean
}

export default function Ingredient({name, image, selected = false, ...rest}
    : ingredientsProps & PressableProps){
    return (
        <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
            <Image style={styles.image} source={require("@/assets/apple.png")}/>
            <Text style={styles.title}>
            Maçã
            </Text>
        </Pressable>
    )

}