using System.Collections.Generic;
using System.Threading.Tasks;

public interface IBatchRepository
{
    Task<IEnumerable<Batch>> GetAllBatches();
    Task<Batch> GetBatchById(int id);
    Task<Batch> AddBatch(Batch batch);
    Task<Batch> UpdateBatch(Batch batch);
    Task<bool> DeleteBatch(int id);
}
