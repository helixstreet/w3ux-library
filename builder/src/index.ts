/* @license Copyright 2024 w3ux authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import minimist from "minimist";
import * as extensionAssets from "./builders/extension-assets";
import * as validatorAssets from "./builders/validator-assets";
import * as utils from "./builders/utils";
import * as directory from "./builders/directory";
import * as reactOdometer from "./builders/react-odometer";
import * as reactPolkicon from "./builders/react-polkicon";

const args = minimist(process.argv.slice(2));

const { t: task } = args;

switch (task) {
  case "build:directory":
    directory.build();
    break;

  case "build:extension-assets":
    extensionAssets.build();
    break;

  case "build:validator-assets":
    validatorAssets.build();
    break;

  case "build:react-odometer":
    reactOdometer.build();
    break;

  case "build:react-polkicon":
    reactPolkicon.build();
    break;

  case "build:utils":
    utils.build();
    break;

  default:
    console.log("❌ No task provided.");
}
