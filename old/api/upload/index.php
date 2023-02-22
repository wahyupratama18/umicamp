<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, POST");

if (
    isset($_POST['uid']) &&
    isset($_POST['file-name']) &&
    isset($_POST['file-type']) &&
    $_POST['uid'] !== 'null'
) {
    $uid = $_POST['uid'];
    $fileName = $_POST['file-name'];
    $extensionFile = $_POST['file-type'] === '.pdf' ? '.pdf' : '.png';

    $normalizeLocation = '../../';
    $targetLocation = 'upload-media/';
    $baseLocation = $normalizeLocation . $targetLocation;
    $docPath = $baseLocation . $uid;

    try {

        if (!file_exists($baseLocation)) {
            mkdir($baseLocation, 0777);
        }
        if (!file_exists($docPath)) {
            mkdir($docPath, 0777);
        }

        $pathFile = $docPath . '/' . $fileName . $extensionFile;

        if (move_uploaded_file($_FILES["data"]["tmp_name"], $pathFile)) {
            echo json_encode([
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => '/' . $targetLocation . $uid . '/' . $fileName . $extensionFile,
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            ]);
        }
    } catch (Exception $exception) {
        echo json_encode([
            "status" => "error",
            "error" => true,
            "message" => "Error exception",
            "exception" => $exception,
        ]);
    }


}

