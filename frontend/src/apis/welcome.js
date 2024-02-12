import React, { useState } from "react";
import axios from "axios";

export const loginApi = async () => {
  const url = "test.com";

  try {
    const res = await axios({
      method: "get",
      url,
    });
    return console.log(res);
  } catch (error) {
    console.log(error);
  }
};
