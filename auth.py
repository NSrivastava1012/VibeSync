<<<<<<< HEAD
from functools import wraps
from flask import session, redirect, url_for

def login_required(f):

    @wraps(f)
    def decorated(*args, **kwargs):

        if "user_id" not in session:

            return redirect(
                url_for("login")
            )

        return f(*args, **kwargs)

=======
from functools import wraps
from flask import session, redirect, url_for

def login_required(f):

    @wraps(f)
    def decorated(*args, **kwargs):

        if "user_id" not in session:

            return redirect(
                url_for("login")
            )

        return f(*args, **kwargs)

>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
    return decorated