function converTemperature(temp, isCelsius) {
    if(isCelsius)
        return (temp * 9) / 5 + 32;
    else
        return (temp - 32) * (5/9);
}