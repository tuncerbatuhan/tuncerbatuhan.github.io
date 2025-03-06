<!DOCTYPE html>
<html lang="en">
<head>
    <title>Currency Calculation</title>
    <meta name="description" content="CENG 311 Inclass Activity 5" />
</head>
<body>

    <?php
    $exchangeRates = [
        "USD_CAD" => 1.36,
        "USD_EUR" => 0.91,
        "CAD_USD" => 0.74,
        "CAD_EUR" => 0.67,
        "EUR_USD" => 1.10,
        "EUR_CAD" => 1.50
    ];

    $fromValue = "";
    $convertedAmount = "";
    $fromCurrency = "";
    $toCurrency = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["from_value"]) && isset($_POST["from_currency"]) && isset($_POST["to_currency"])) {
            $fromValue = floatval($_POST["from_value"]);
            $fromCurrency = $_POST["from_currency"];
            $toCurrency = $_POST["to_currency"];
            
            $key = str_replace("F", "", $fromCurrency) . "_" . str_replace("T", "", $toCurrency);
            
            if (isset($exchangeRates[$key])) {
                $convertedAmount = $fromValue * $exchangeRates[$key];
            }
        }

        session_start();
        $_SESSION["from_value"] = $fromValue;
        $_SESSION["from_currency"] = $fromCurrency;
        $_SESSION["to_currency"] = $toCurrency;
        $_SESSION["converted_amount"] = $convertedAmount;

        header("Location: activity5.php");
        exit;
    }

    session_start();
    if (isset($_SESSION["from_value"])) {
        $fromValue = $_SESSION["from_value"];
        $fromCurrency = $_SESSION["from_currency"];
        $toCurrency = $_SESSION["to_currency"];
        $convertedAmount = $_SESSION["converted_amount"];
        session_unset(); 
        session_destroy();
    }
    ?>

    <form action="activity5.php" method="POST">
        <table>
            <tr>
                <td>From:</td>
                <td><input type="text" name="from_value" value="<?php echo htmlspecialchars($fromValue); ?>"/></td>
                <td>Currency:</td>
                <td>
                    <select name="from_currency">
                        <option value="FUSD" <?php if ($fromCurrency == "FUSD") echo "selected"; ?>>USD</option>
                        <option value="FCAD" <?php if ($fromCurrency == "FCAD") echo "selected"; ?>>CAD</option>
                        <option value="FEUR" <?php if ($fromCurrency == "FEUR") echo "selected"; ?>>EUR</option>
                    </select>
                </td>    
            </tr>
            <tr>
                <td>To:</td>
                <td><input type="text" name="to_value" value="<?php echo htmlspecialchars($convertedAmount); ?>" readonly/></td>
                <td>Currency:</td>
                <td>
                    <select name="to_currency">
                        <option value="TUSD" <?php if ($toCurrency == "TUSD") echo "selected"; ?>>USD</option>
                        <option value="TCAD" <?php if ($toCurrency == "TCAD") echo "selected"; ?>>CAD</option>
                        <option value="TEUR" <?php if ($toCurrency == "TEUR") echo "selected"; ?>>EUR</option>
                    </select>
                </td>    
            </tr>
            <tr>
                <td colspan="3"></td>
                <td><input type="submit" value="Convert"/></td>    
            </tr>
        </table>
    </form>        
</body>
</html>
