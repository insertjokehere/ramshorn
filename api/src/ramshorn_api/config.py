import os


def get(name, default=None):
    if name.upper() in os.environ:
        return os.environ[name.upper()]
    else:
        return default


def get_bool(*args, **kwargs):
    value = get(*args, **kwargs)
    if isinstance(value, bool):
        return value
    return value not in ['false', 'False']


def get_list(*args, **kwargs):
    value = get(*args, **kwargs)
    if isinstance(value, list):
        return value
    return value.split(",")
