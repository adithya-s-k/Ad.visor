// "use server";

// import User from "@/lib/modals/user.modal";
// import { connect } from "@/lib/db";

// export async function createUser(user: any) {
//   try {
//     await connect();
//     const newUser = await User.create(user);
//     return JSON.parse(JSON.stringify(newUser));
//   } catch (error) {
//     console.log(error);
//   }
// }

"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function updateUser(user: any) {
  try {
    await connect();
    const updatedUser = await User.findOneAndUpdate(
      { clerkId: user.clerkId },
      user,
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connect();
    const deletedUser = await User.findOneAndDelete({ clerkId });
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}