using System;
using System.Collections.Generic;

namespace SucursalesEntities.DBEntities;

public partial class AcMoneda
{
    public int Id { get; set; }

    public string Abreviacion { get; set; } = null!;

    public string Nombre { get; set; } = null!;
}
