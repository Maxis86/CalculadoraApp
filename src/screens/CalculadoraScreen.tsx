import React, { useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'

import {  Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles} from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

    const {
        limpiar,
        armarNumero,
        positivoNegativo,
        btndelete,
        btnDividir,
        btMultiplicar,
        btnSumar,
        btnRestar,
        calcular,
        numeroAnterior,
        numero
    } = useCalculadora ();

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <View style = {styles.calculadoraContainer}>
            {
               (numeroAnterior !== '0' && <Text style = {styles.resultadoPequeno}>{numeroAnterior}</Text>) 
            }
            
            <Text 
                style = {styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit // para que se achique el numero en vez de ponerse en dos filas
                >{numero}</Text>

            {/* Fila de Botones */}
            <View style = { styles.fila}>
                <BotonCalc texto="C" color="#9B9B9B" action={limpiar}/>
                <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo}/>
                <BotonCalc texto="del" color="#9B9B9B" action={btndelete}/>
                <BotonCalc texto="/" color="#FF9427" action={btnDividir}/>
            </View>

            <View style = { styles.fila}>
                <BotonCalc texto="7" action={armarNumero}/>
                <BotonCalc texto="8" action={armarNumero}/>
                <BotonCalc texto="9" action={armarNumero}/>
                <BotonCalc texto="x" color="#FF9427" action={btMultiplicar}/>
            </View>

            <View style = { styles.fila}>
                <BotonCalc texto="4" action={armarNumero}/>
                <BotonCalc texto="5" action={armarNumero}/>
                <BotonCalc texto="6" action={armarNumero}/>
                <BotonCalc texto="-" color="#FF9427" action={btnRestar}/>
            </View>

            <View style = { styles.fila}>
                <BotonCalc texto="1" action={armarNumero}/>
                <BotonCalc texto="2" action={armarNumero}/>
                <BotonCalc texto="3" action={armarNumero}/>
                <BotonCalc texto="+" color="#FF9427" action={btnSumar}/>
            </View>

            <View style = { styles.fila}>
                <BotonCalc texto="0" ancho = {true} action={armarNumero}/>
                <BotonCalc texto="." action={armarNumero}/>
               
                <BotonCalc texto="=" color="#FF9427" action={calcular}/>
            </View>

            

        </View>
    )
}
