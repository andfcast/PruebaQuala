using System;
using System.Collections.Generic;

namespace SucursalesEntities.DBEntities;

public partial class AcSucursal
{
    public int Id { get; set; }

    public int Codigo { get; set; }

    public string Descripcion { get; set; } = null!;

    public string Direccion { get; set; } = null!;

    public string Identificacion { get; set; } = null!;

    public DateTime FechaCreacion { get; set; }

    public int IdMoneda { get; set; }
}
