import {
  asyncActionStart,
  asyncActionError,
  asyncActionEnd
} from "../../../app/async/asyncActions";

export const createStatus = body => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const { posts, users } = require("../../../app/db/db");
    dispatch(asyncActionStart());
    try {
      const doc = await posts.add({
        ...body,
        postedAt: firebase.firestore.Timestamp.fromDate(new Date())
      });
      posts.doc(doc.id).update({
        id: doc.id
      });
      users
        .doc(body.uid)
        .update({
          posts: firebase.firestore.FieldValue.arrayUnion({ postId: doc.id })
        })
        .then(() => {
          dispatch(asyncActionEnd());
        });
    } catch (err) {
      dispatch(asyncActionEnd());
    }
  };
};
